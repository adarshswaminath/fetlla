from django.db import models

# Create your models here.

class Batch(models.Model):
    batch_name = models.CharField(max_length=50)
    num_students = models.PositiveBigIntegerField(default=0)
    faculty  = models.CharField(max_length=100)
    total_income = models.DecimalField(max_digits=10,decimal_places=2)
    total_expense = models.DecimalField(max_digits=10,decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.batch_name


class Student(models.Model):
    student_name = models.CharField(max_length=100)
    batch = models.ForeignKey(Batch, on_delete=models.CASCADE, null=True, blank=True)
    fee_paid = models.DecimalField(max_digits=10,decimal_places=2)
    contact_number = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.student_name + self.batch.batch_name

# class Faculty(models.Model):
#     faculty_name = models.CharField(max_length=100)

#     def __str__(self):
#         return self.faculty_name

# class Batch(models.Model):
#     batch_name = models.CharField(max_length=50)
#     num_students = models.IntegerField(default=0)
#     # faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
#     faculty = models.CharField(max_length=50)
#     # total_income = models.DecimalField(max_digits=10, decimal_places=2)
#     total_expense = models.DecimalField(max_digits=10, decimal_places=2)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.batch_name

# class Student(models.Model):
#     student_name = models.CharField(max_length=100)
#     batches = models.ManyToManyField(Batch, through='StudentsBatchAllocation')
#     fee_paid = models.DecimalField(max_digits=10, decimal_places=2)
#     contact_number = models.CharField(max_length=20)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.student_name


# class StudentsBatchAllocation(models.Model):
#     student = models.ForeignKey(Student, on_delete=models.CASCADE)
#     batch = models.ForeignKey(Batch, on_delete=models.CASCADE)

#     def __str__(self):
#         return f'{self.student.student_name} - {self.batch.batch_name}'


# class BatchPayment(models.Model):
#     batch = models.ForeignKey(Batch, on_delete=models.CASCADE)
#     payment_amount = models.DecimalField(max_digits=10, decimal_places=2)
#     payment_date = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f'Payment for {self.batch.batch_name} - {self.payment_date}'


# class BatchExpense(models.Model):
#     batch = models.ForeignKey(Batch, on_delete=models.CASCADE)
#     expense_amount = models.DecimalField(max_digits=10, decimal_places=2)
#     expense_date = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f'Expense for {self.batch.batch_name} - {self.expense_date}'


