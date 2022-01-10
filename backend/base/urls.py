from django.urls import path
from base.views.order_views import addOrderItems, getMyOrders, getOrderById, updateOrderToPaid
from base.views.user_views import updateUser, getUserById, deleteUser, getUserProfile, getUsers, registerUser, updateUserProfile, MyTokenObtainPairView
from base.views.product_views import getProduct, getProducts, deleteProduct

urlpatterns = [
    # products
    path('products/', getProducts, name='products'),
    path('products/delete/<str:pk>/', deleteProduct, name='delete-product'),
    path('products/<str:pk>', getProduct, name='product'),

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
    path('orders/add/', addOrderItems, name='orders-add'),
    path('orders/myorders/', getMyOrders, name='myorders'),
    path('orders/<str:pk>/', getOrderById, name='user-order'),
    path('orders/<str:pk>/pay/', updateOrderToPaid, name='pay'),
]
