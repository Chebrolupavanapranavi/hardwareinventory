from django.contrib import admin
from django.urls import path, include  # Import include for including app URLs

urlpatterns = [
    path("admin/", admin.site.urls),  # Admin interface URL
    path("", include('inventory.urls')),  # Include URLs from the inventory app
]
