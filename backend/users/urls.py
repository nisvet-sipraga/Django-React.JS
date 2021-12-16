from django.urls import include, path
from users import views
from .views import UserListView

urlpatterns = [
    path('', UserListView.as_view()),
    path('auth/', include('rest_auth.urls')),
    path('cat/', views.CategoryView.as_view()),
    path('podcat/<int:cId>/', views.PodCategoryView.as_view()),
    path('listMovies/<int:mId>/', views.ListingMoviesView.as_view()),
    path('addMovies/', views.AddMovesView.as_view()),
    path('adminLogin/', views.AdminLogin.as_view()),
    path('testLogin/', views.TestLogin.as_view()),
    path('testRegister/', views.Register.as_view()),
    path('testToken/', views.TestToken.as_view()),

]
