from django.urls import path
from .views import getProduct, getProducts, getRoutes

urlpatterns = [
    path('', getRoutes, name= 'routes'),
    path('products/', getProducts, name='products'),
    path('product/<str:pk>', getProduct, name='product')
]
