from tkinter import *
from time import strftime

def atualizar_relógio():
    horario_atual = strftime("%H:%M:%S %p")
    rotulo_relogio.config(text=horario_atual)
    rotulo_relogio.after(1000, atualizar_relógio)

janela = Tk ()
janela.title("Relogio Digital Simples")

rotulo_relogio = Label (
    janela,
    font=("Arial", 40, "bold"),
    background="black",
    foreground="white"
)

rotulo_relogio.pack(anchor="center")

atualizar_relógio()

janela.mainloop()