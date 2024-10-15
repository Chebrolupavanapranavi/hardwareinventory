# inventory/urls.py

from django.urls import path, include
from .views import AssetViewSet, UserRegistration, UserLogin

router = DefaultRouter()
router.register(r'assets', AssetViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', UserRegistration.as_view(), name='register'),
    path('login/', UserLogin.as_view(), name='login'),
]
