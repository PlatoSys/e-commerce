from django.http.response import Http404
from ..models import Product, Review
from ..serializers import ProductSerializer
from rest_framework.decorators import api_view, permission_classes, APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    if query is None:
        products = Product.objects.all()
    else:
        products = Product.objects.filter(name__icontains=query)

    page = request.query_params.get('page')
    paginator = Paginator(products, 16)

    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    page = 1 if page is None else int(page)

    serializer = ProductSerializer(products, many=True)
    return Response({'products': serializer.data, 'page': page,
                    "pages": paginator.num_pages}, status=status.HTTP_200_OK)


@api_view(['GET'])
def getTopProducts(request):
    products = Product.objects.filter(rating__gte=4).order_by('-rating')[0:5]
    serializer = ProductSerializer(products, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def uploadImage(request):
    data = request.data
    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)

    product.image = request.FILES.get('image')
    product.save()
    return Response(str(product.image))


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
    user = request.user
    product = Product.objects.get(_id=pk)
    data = request.data

    alreadyExists = product.review_set.filter(user=user).exists()
    if alreadyExists:
        return Response({'detail': 'Review Already Exists'},
                        status=status.HTTP_400_BAD_REQUEST)

    elif data['rating'] == 0:
        return Response({'detail': 'Please select a rating'},
                        status=status.HTTP_400_BAD_REQUEST)
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment']
        )

        reviews = product.review_set.all()
        product.numReviews = len(reviews)

        total = 0
        for review in reviews:
            total += review.rating
        product.rating = total
        product.save()

        return Response({'detail': 'review Added'})


@permission_classes([IsAdminUser])
class AdminProductDetail(APIView):
    """
    Retrieve, update or delete a Product instance.
    """

    def get_object(self, pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        data = request.data
        product = Product.objects.get(_id=pk)

        product.name = data['name']
        product.price = data['price']
        product.brand = data['brand']
        product.countInStock = data['countInStock']
        product.category = data['category']
        product.description = data['description']
        product.save()

        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk, format=None):
        product = Product.objects.get(_id=pk)
        product.delete()
        return Response({'detail': 'product was deleted'},
                        status=status.HTTP_200_OK)

    def post(self, request, pk):
        user = request.user
        product = Product.objects.create(
            user=user,
            name='sample',
            price=10,
            brand='Brand',
            countInStock=5,
            category='Sample Category',
            description='Desc'
        )
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
