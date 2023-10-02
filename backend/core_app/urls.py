from django.urls import path
from .views import CreateBatchAv,UpdateBatchAV,GetListBatchAV


urlpatterns = [
    path('batch/',GetListBatchAV.as_view(),name='batch-list'),
    path('batch/create/',CreateBatchAv.as_view(),name="create-batch"),
    path('batch/<int:pk>/',UpdateBatchAV.as_view(),name='update-batch'),
    # path('students')
]