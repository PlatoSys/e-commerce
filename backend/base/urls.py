from django.urls import path
from base.views.order_views import addOrderItems, getOrderById, updateOrderToPaid
from base.views.user_views import getUserProfile, getUsers, registerUser, updateUserProfile, MyTokenObtainPairView
from base.views.product_views import getProduct, getProducts

urlpatterns = [
    # products
    path('products/', getProducts, name='products'),
    path('products/<str:pk>', getProduct, name='product'),

    # users
    path('users/register/', registerUser, name='register'),
    path('users/login/', MyTokenObtainPairView.as_view(), 
        name='token_obtain_pair'),
    path('users/profile/', getUserProfile, name='users-profile'),
    path('users/', getUsers, name='users'),
    path('users/profile/update/', updateUserProfile, name='user-profile-update'),

    # orders
    path('orders/add/', addOrderItems, name='orders-add'),
    path('orders/<str:pk>/', getOrderById, name='user-order'),
    path('orders/<str:pk>/pay/', updateOrderToPaid, name='pay'),
]
