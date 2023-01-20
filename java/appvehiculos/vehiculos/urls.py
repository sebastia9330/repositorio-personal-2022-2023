from rest_framework import routers
from .api import VehiculosViewSet
from .api import ModeloViewSet

router = routers.DefaultRouter()

router.register('api/autos', VehiculosViewSet, 'vehiculos' )

urlpatterns = router.urls