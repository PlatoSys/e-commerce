from django.db.models.signals import pre_save
from django.contrib.auth.models import User

def updateUser(sender, instance, **kwargs):
    user = instance
    user.username = user.email if user.email else user.username

pre_save.connect(updateUser, sender=User)