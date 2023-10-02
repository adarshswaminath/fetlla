from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

from .models import Batch,Student
from .serializers import BatchSerializer,StudentSerializer


class GetListBatchAV(APIView):

    def get(self,request):
        batch = Batch.objects.all()
        serializer = BatchSerializer(batch,many=True)
        return Response(serializer.data)
    
class CreateBatchAv(APIView):

    def post(self,request):
        serializer = BatchSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UpdateBatchAV(APIView):
    
    def get(request,self,pk):
        try:
            batch = Batch.objects.get(pk=pk)
        except:
            return Response({"Movie Not Found"})
        serializer = BatchSerializer(batch)
        return Response(serializer.data)
    

    def put(request,self,pk):
        batch = Batch.objects.get(pk=pk)
        serializer = BatchSerializer(batch,data=request.data)
        if serializer.is_valid:
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=400)
        

class ListStudent(APIView):

    def get(self,request):
        student = Student.objects.all()
        serializer = StudentSerializer(student,many=True)
        return Response(serializer.data)
    
class CreateStudent(APIView):

    def post(request,self):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid:
            serializer.save()
            return Response(serializer.data,status=201)
        else:
            return Response(serializer.errors,status=400)


class UpdateStudentDetails(APIView):

    
    def get(self,request,pk):
        try:
            student = Student.objects.get(pk=pk)
        except:
            return Response({"Student Not Found"})
        
        serializer = StudentSerializer(student)
        return Response(serializer.data)
    
        
    def put(request,self,pk):
        student = Student.objects.get(pk=pk)
        serializer = StudentSerializer(student,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        