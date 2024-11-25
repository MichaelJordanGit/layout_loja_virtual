<?php require_once('header.php') ?>
    <!--------------------inicio minha conta------------->
    <div class="minha-conta">
        <div class="container">
            <div class="linha">
                <div class="col-2">
                    <img src="assets/img/banner-1.png" width="100%" alt="">
                </div>
                <div class="col-2">
                    <div class="formulario">
                        <div class="btn-form">
                            <span onclick="entrar()">Entrar</span>
                            <span onclick="cadastro()">Cadastro</span>
                            <hr id="indicador">
                        </div>
                        <form action="" method="post" id="entrarpainel">
                            <input type="email" name="email" placeholder="E-mail de acesso">
                            <input type="password" name="senha" placeholder="Digite sua senha">
                            <button type="submit" name="sendentrar" class="btn">Entrar</button>
                            <a href="">Esqueceu sua senha</a>
                        </form>
                        <form action="" method="post" id="cadastrosite">
                            <input type="text" name="nome" placeholder="Nome completo">
                            <input type="email" name="email" placeholder="E-mail de acesso">
                            <input type="password" name="senha" placeholder="Digite sua senha">
                            <button type="submit" name="sendcadastro " class="btn">Cadastre-se</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--------------------fim minha conta--------------------------------------->
    
<?php require_once('footer.php') ?>