from django.urls import path
# from . import views
from .views import TaskCreate, TaskList, TaskDetail, TaskUpdate, DeleteView
from .views import CustomLoginView, RegisterPage
from django.contrib.auth.views import LogoutView, LoginView


urlpatterns = [
    path('login/', CustomLoginView),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
    path('register/', RegisterPage.as_view(), name='register'),

    path('', TaskList.as_view(), name='tasks'),
    path('task/<int:pk>/', TaskDetail.as_view(), name='task'),
    path('task-create/', TaskCreate.as_view(), name='task-create'),
    path('task-update/<int:pk>/', TaskUpdate.as_view(), name='task-update'),
    path('task-delete/<int:pk>/', DeleteView.as_view(), name='task-delete'),
]