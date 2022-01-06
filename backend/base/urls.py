from django.urls import path
from base.views.user_views import getUserProfile, getUsers, registerUser, updateUserProfile, MyTokenObtainPairView
from base.views.product_views import getProduct, getProducts

urlpatterns = [
    # Products
    path('products/', getProducts, name='products'),
    path('products/<str:pk>', getProduct, name='product'),

    # User
    path('users/register/', registerUser, name='register'),
    path('users/login/', MyTokenObtainPairView.as_view(), 
        name='token_obtain_pair'),
    path('users/profile/', getUserProfile, name='users-profile'),
    path('users/', getUsers, name='users'),
    path('users/profile/update/', updateUserProfile, name='user-profile-update')

]
