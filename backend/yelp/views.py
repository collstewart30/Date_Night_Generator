from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from .models import Yelp
from .serializers import YelpSerializer
from django.shortcuts import get_object_or_404


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def yelp_items_search(request):
    print(
        'User: 'f"{request.user.id} {request.user.email} {request.user.username}")

    if request.method == 'POST':
        serializer = YelpSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        yelp_items = Yelp.objects.filter(user_id=request.user.id)
        serializer = YelpSerializer(yelp_items, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        yelp_items = get_object_or_404(Yelp, user_id=request.user.id)
        serializer = YelpSerializer(yelp_items, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        yelp_items = get_object_or_404(Yelp, user_id=request.user.id)
        yelp_items.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)