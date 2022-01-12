from django.urls import path
from base.views.order_views import OrderDetail, getOrders, updateOrderToDelivered, getMyOrders
from base.views.user_views import updateUser, getUserById, deleteUser, getUserProfile, getUsers, registerUser, updateUserProfile, MyTokenObtainPairView
from base.views.product_views import AdminProductDetail, getTopProducts, createProductReview, uploadImage, getProduct, getProducts

urlpatterns = [
    # products
    path('products/', getProducts, name='products'),
    path('products/upload/', uploadImage, name='upload-image'),
    path('products/top/', getTopProducts, name='top-products'),
    path('products/<str:pk>/reviews/', createProductReview, name='product-reviews'),
    path('products/<str:pk>/', getProduct, name='product'),
    path('product/<str:pk>/', AdminProductDetail.as_view(), name='admin-product'),

    # users
    path('users/register/', registerUser, name='register'),
    path('users/login/', MyTokenObtainPairView.as_view(),
            name='token_obtain_pair'),
    path('users/profile/', getUserProfile, name='users-profile'),
    path('users/', getUsers, name='users'),
    path('users/profile/update/', updateUserProfile, name='user-profile-update'),
    path('users/delete/<str:pk>/', deleteUser, name='user-delete'),
    path('users/update/<str:pk>/', updateUser, name='user-update'),
    path('users/<str:pk>/', getUserById, name='user-detail'),

    # orders
    path('orders/', getOrders, name='orders'),
    path('orders/myorders/', getMyOrders, name='myorders'),
    path('order/<str:pk>/', OrderDetail.as_view(), name='auth-order'),
    path('orders/<str:pk>/deliver/', updateOrderToDelivered, name='user-order'),
]
