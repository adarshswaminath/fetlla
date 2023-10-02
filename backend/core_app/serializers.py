from rest_framework import serializers
from .models import Batch,Student

class BatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Batch
        fields = '__all__'



class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'