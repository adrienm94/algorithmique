
def readTab(size):
              
    tab=[]
    
    for i in range(size):
        element = float(input("Give tab["+str(i)+"] : "))
        tab.append(element)
    print(tab)

readTab(3)
