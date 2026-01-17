from django.shortcuts import render

# Create your views here.

def heena_home(request):
    message_one = "I’m really grateful for you—for the laughs, the late talks. and the way you always show up when I need you."
    message_two = "You’ve been such a constant in my life. and I don’t say it enough, but it truly means a lot. Life is lighter and better with you in it."
    message_three = "I hope this year gives you back even a fraction of the kindness. love, and joy you give to everyone around you."
    message_four = "You deserve all the good things—plus maybe a little chaos 🤪. Just to keep things interesting."
    message_five = "Since you’re celebrating in Malaysia. I hope your birthday is as amazing as the food. the heat, and getting lost in a giant mall 😄🇲🇾."
    message_six = "Eat all the nasi lemak, take all the photos, and enjoy every second."
    all_message = message_one+message_two+message_three+message_four+message_five+message_six
    message = all_message.split(".")
    context={
        "birthday_name": "Heena",
        "message":message,
    }
    return render(request,'heena/index.html', context=context)

