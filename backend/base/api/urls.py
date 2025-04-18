
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import MyTokenObtainPairView, getNotes, registerUser, createNote

urlpatterns = [
    path('notes/', getNotes),
    path('notes/create/', createNote),  # New endpoint for adding notes
    path('register/', registerUser),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
