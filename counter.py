def counter(n):
    if n>0:
        counter(n-1)
    print(n)
    
counter(2)
