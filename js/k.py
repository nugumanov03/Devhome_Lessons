import numpy as np
def euler(f,t0,u0,dt,t_max):
    u=u0; t=t0; u_all=[u0]; t_all=[t0]
    while t<t_max:
        print(f't = {t}')
        print(f'u = {u} + step * {f(t,u)}')
        print(f'u_new = {u}')
        u = u + dt*f(t,u)
        u_all.append(u)
        t = t + dt
        t_all.append(t)
    print(t_all)
    print(u_all)
    return(t_all,u_all)
def ode(x, y):
    return y - 3 * x
def custom_function(x):
    return pow(np.exp(x), x+1) + 5*x + 5

user_input = input("Enter x0, y0, h, and end: ")
if not user_input.strip():
    x0, y0, h, end = 1, 0, 0.3, 2.2
x_vals, y_vals = euler(ode, x0, y0, h, end)
