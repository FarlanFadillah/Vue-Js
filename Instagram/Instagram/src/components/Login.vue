<script setup>
</script>

<template>
    <div class="container">

        <div class="sample-pic">
            <div class="image-container">
                <img src="../assets/3.jpg" alt="Image 2">
              </div>              
        </div>

        <div class="login-form">
            <div class="input-form">
                <div class="logo">
                    <a href="/"><img src="../assets/instagram.png" alt=""></a>
                </div>
    
                <form action="" method="post">
                    <input name="username" id="username" type="text" required placeholder="Phone number, username, or email">
                    <input name="password" id="password" type="password" required placeholder="Password">
                    <button type="submit" class="login-btn">Log in</button>
                </form>
    
                <div class="border">
                    <div class="line"></div>
                    <p>OR</p>
                    <div class="line"></div>
                </div>
    
                <div class="alternatif">
                    <a href=""><i class="fa-brands fa-square-facebook"></i> <span>Log in with Facebook</span></a>
                    <a href="">Forgot Password?</a>
                </div>
            </div>

            <div class="sign-up-link">
                <p>Don't have an account? <a href="register">Sign up</a></p>
            </div>

            <div class="get-link">
                <p>Get the app.</p>
                <div class="logo">
                    <img src="../assets/googlePlayStore.png" alt="">
                    <img src="../assets/microsoft.png" alt="">
                </div>
            </div>
            
        </div>

    </div>
</template>

<style>

:root{
    --color-border : rgb(218, 214, 214);
}

* {
    font-family: "Helvetica Neue", Arial, sans-serif;
}

body {
    padding-top: 40px;
    padding-bottom: 50px;
}

.container {
    height: 580px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.container .sample-pic {
    max-width: 380px;
    margin-right: 30px;
}

.sample-pic .image-container img{
    width: 100%;
}


.container .login-form .input-form{
    border: 1px solid var(--color-border);
    border-radius: 3px;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container .login-form .input-form .logo{
    padding: 50px;
}

.container .login-form .input-form .logo img{
    cursor: pointer;
    width: 200px;
}
.container .login-form .input-form form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container .login-form .input-form form input{
    margin-bottom: 5px;
    width: 258px;
    height: 36px;
    padding: 0;
    padding-left: 5px;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    font-size: 12px;
}

input:focus{
    outline: none;
}


.container .login-form .input-form form button{
    margin-top: 10px;
    width: 260px;
    height: 32px;
    background-color: #0095f6;
    color: #ffff;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    outline: none;
}

.border{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.line{
    background-color: var(--color-border);
    width: 105px;
    height: 1px;
}
.border p{
    font-size: 12px;
    color: gray;
    margin-left: 15px;
    margin-right: 15px;
}
.alternatif{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
}

.alternatif a{
    color: #385185;
    font-size: 15px;
    text-decoration: none;
    margin-bottom: 20px;
}


.alternatif a:last-child{
    color: #00376B;
    font-size: 13px;
    margin-bottom: 25px;
}

.login-form .sign-up-link{
    display: flex;
    justify-content: center;
    margin-top: 10px;
    border: 1px solid var(--color-border);
    border-radius: 3px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.sign-up-link p{
    font-size: 14px;
}

.sign-up-link p a{
    text-decoration: none;
    color: #0095f6;
    font-weight: 700;
}

.get-link{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.get-link p{
    font-size: 13px;
}
.get-link .logo img{
    height: 40px;
}

.get-link .logo img:last-child{
    margin-left: 5px;
}

@media screen and (max-width: 700px){
    .sample-pic{
        display: none;
    }
}

</style>