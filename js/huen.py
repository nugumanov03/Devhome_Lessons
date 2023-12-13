def huen_half(f,t0,u0,dt,t_max):
    u=u0; t=t0; u_all=[u0]; t_all=[t0]
    while t<t_max:
        k1 = f(t,u)
        print(f'k1 = {k1}')
        ue = u + dt*k1
        print(f'{ue} = {u} + step * k1')
        k2 = f(t+dt,ue)
        print(f'k2 = {k2}')
        u = u + 0.5*dt*(k1 + k2)
        print(f'u_new = {u} + {0.5*dt*(k1 + k2)}')
        print(f'{u}')
        u_all.append(u)
        t = t + dt
        t_all.append(t)
    print(t_all)
    print(u_all)
    return(t_all,u_all)
def ode(x, y):
    return y - 7 * x

user_input = input("Enter x0, y0, h, and end: ")
if not user_input.strip():
    x0, y0, h, end = 3, 3, 0.5, 5
x_vals, y_vals = huen_half(ode, x0, y0, h, end)