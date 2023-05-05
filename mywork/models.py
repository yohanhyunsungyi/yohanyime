from django.db import models
from django.utils import timezone

# class모델을 정의함
# 모델의 이름은 Post
# models 는 Post가 장고 모델임을 의미함. 이코드 때문에 장고는 Post가 데이터베이스에 저장되어야한다고 알게됨
# models.CharField 짧은 문자열 정보
# models.TextField 글자수 제한없는 텍스트
# models.DateTimeField 날짜와 시간
# models.ForeignKey 다른 모델에 대한 링크
# def publish(self)는 publish라는 메서드
# def 는 이것이 함수/메서드라는 뜻임
# 메서드 이름은 소문자 나 언더스코어를 사용함
# 메서드는 무언가를 돌려줌 return
# 여기서는 __str__를 호출하면 Post모델의 제목 텍스트(string)를 받게 됨

class Work(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    desciption = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    link = models.CharField(max_length=200)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title
