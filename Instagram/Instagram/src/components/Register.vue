<script setup></script>

<template>

<div class="container">
        <div class="register-form">
            <form action="" method="post">
                <div class="input-form">
                    <div class="logo">
                        <img src="../assets/instagram.png" alt="">
                    </div>
                    <div class="moto">
                        <h2>Sign up to see photos and videos</h2>
                        <h2>from your friends.</h2>
                    </div>

                    <div class="alternatif">
                        <button><i class="fa-brands fa-square-facebook"></i> <span>Log in with Facebook</span></button>
                    </div>

                    <div class="border">
                        <div class="line"></div>
                        <p>OR</p>
                        <div class="line"></div>
                    </div>


                    <input name="email" id="number-email" type="email" required placeholder="Email">
                    <input name="full-name" id="full-name" type="text" required placeholder="Full Name">
                    <input name="username" id="username" type="text" required placeholder="Username">
                    <input name="password" id="password" type="password" required placeholder="Password">
                    <input name="password2" id="password" type="password" required placeholder="Repeat Password">



                    <div class="term-policy">
                        <p>
                            People who use our service may have uploaded your contact information to Instagram.
                            <span>Learn More</span>
                        </p>
                        <p>By signing up, you agree to our <span>Terms</span> ,<span>Privacy Policy</span> and
                            <span>Cookies Policy</span> .

                        </p>
                    </div>

                    <a class="button sign-btn">Sign up</a>


                </div>

                <div class="birthday-info">
                    <img src="../assets/birthday-cake.png" alt="">
                    <p>Add Your Birthday</p>
                    <span>This won't be a part of your public profile.</span>
                    <a class="form-link" href="">Why do i need to provide my birthday?</a>

                    <div class="date-option">
                        <select name="month" id="month">
                            <option value="">January</option>
                            <option value="">February</option>
                            <option value="">March</option>
                            <option value="">April</option>
                            <option value="">May</option>
                            <option value="">June</option>
                            <option value="">July</option>
                            <option value="">August</option>
                            <option value="">September</option>
                            <option value="">October</option>
                            <option value="">November</option>
                            <option value="">December</option>
                        </select>
                        <select name="month" id="month">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                            <option value="">12</option>
                            <option value="">13</option>
                            <option value="">14</option>
                            <option value="">15</option>
                            <option value="">16</option>
                            <option value="">17</option>
                            <option value="">18</option>
                            <option value="">19</option>
                            <option value="">20</option>
                            <option value="">21</option>
                            <option value="">22</option>
                            <option value="">23</option>
                            <option value="">24</option>
                            <option value="">25</option>
                            <option value="">26</option>
                            <option value="">27</option>
                            <option value="">28</option>
                            <option value="">29</option>
                            <option value="">30</option>
                            <option value="">31</option>
                        </select>
                        <select name="month" id="month">
                            <option value="">2023</option>
                            <option value="">2022</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                            <option value="">2019</option>
                            <option value="">2018</option>
                            <option value="">2017</option>
                            <option value="">2016</option>
                            <option value="">2015</option>
                            <option value="">2014</option>
                            <option value="">2013</option>
                            <option value="">2012</option>
                            <option value="">2011</option>
                            <option value="">2010</option>
                            <option value="">2009</option>
                            <option value="">2008</option>
                            <option value="">2007</option>
                            <option value="">2006</option>
                            <option value="">2005</option>
                            <option value="">2004</option>
                            <option value="">2003</option>
                            <option value="">2002</option>
                            <option value="">2001</option>
                            <option value="">2000</option>
                            <option value="">1999</option>
                        </select>
                    </div>
                    <div class="info">
                        <p>You need to enter the date you were born</p>
                        <p>Use your own birthday, even if this account is for a business, a pet, or something else</p>
                    </div>

                    <a class="button birthday-page">Next</a>

                    <a class="form-link go-back" id="back-to-form">Go back</a>

                </div>

                <div class="confirmation-page">
                    <img src="../assets/confirmation-mesage.png" alt="">
                    <p>Enter Confirmation Code</p>
                    <p>Enter the confirmation code we sent to your email <span>Resend Code.</span></p>
                    <input type="text" placeholder="Confirmation Code">
                    <input class="button confirmation" type="submit" value="Next">
                    <a class="go-back" id="back-to-birthdayPage">Go Back</a>
                </div>

                <div class="sign-up-link">
                    <p>Have an account? <a href="login">Log in</a></p>
                </div>

                <div class="get-link">
                    <p>Get the app.</p>
                    <div class="logo">
                        <img src="../assets/googlePlayStore.png" alt="">
                        <img src="../assets/microsoft.png" alt="">
                    </div>
                </div>

            </form>

        </div>

    </div>

</template>

<style>

:root {
    --color-border: rgb(218, 214, 214);
    --text-color: rgb(160, 156, 156);
    --blue-text:#0095f6;
    --gray-font-size: 12px;
    --black-font-size: 14px;
}
a{
    text-decoration: none;
}

* {
    font-family: "Helvetica Neue", Arial, sans-serif;
}

body {
    padding-top: 10px;
    padding-bottom: 50px;
}

.container {
    height: 580px;
    display: flex;
    
    flex-direction: row;
    justify-content: center;
}

.sample-pic {
    max-width: 380px;
    margin-right: 30px;
}

.sample-pic .image-container img {
    width: 100%;
}

.register-form .input-form {
    border: 1px solid var(--color-border);
    border-radius: 3px;
    width: 350px;
    height: fit-content;
    display: flex;/* Hilangin bentar, bikin register page 2 dulu*/
    flex-direction: column;
    align-items: center;
}


.register-form .input-form .logo {
    padding: 50px;
    padding-bottom: 0;
    margin-bottom: 20px;
}

.register-form .input-form .logo img {
    cursor: pointer;
    width: 200px;
}

.input-form .moto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-bottom: 15px;
}

.input-form .moto h2 {
    color: var(--text-color);
    margin: 0;
    padding: 0;
    font-size: 16px;
}

.alternatif {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}

.alternatif button {
    margin-top: 10px;
    width: 260px;
    height: 32px;
    background-color: #0095f6;
    color: #ffff;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.alternatif button i {
    margin-right: 5px;
    font-size: 15px;
}

.border {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
}

.line {
    background-color: var(--color-border);
    width: 105px;
    height: 1px;
}

.border p {
    font-size: 12px;
    color: gray;
    margin-left: 15px;
    margin-right: 15px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    margin-bottom: 5px;
    width: 258px;
    height: 36px;
    padding: 0;
    padding-left: 5px;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    font-size: 12px;
}

input:focus {
    outline: none;
}


.button{
    text-align: center;
    margin-top: 10px;
    width: 260px;
    height: fit-content;
    padding: 5px;
    background-color: #0095f6;
    color: #ffff;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    outline: none;
    margin-bottom: 15px;
    cursor: pointer;
}

.input-form .term-policy {
    width: 258px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.term-policy p {
    text-align: center;
    word-wrap: break-word;
    font-size: 12px;
    color: var(--text-color);
}

.term-policy p span {
    color: #00376B;
    cursor: pointer;
}

/* BirthDay Info*/

.birthday-info {
    border: 1px solid var(--color-border);
    border-radius: 3px;
    width: 350px;
    height: fit-content;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
}

.birthday-info p{
    font-size: var(--black-font-size) ;
    font-weight: 550;
    margin-bottom: 10px;
}
.birthday-info span{
    font-size: var(--black-font-size);
    font-weight: 500 ;
    margin-top: 10px;
}
.birthday-info .form-link{
    margin: 0;
    text-decoration: none;
    font-size: var(--black-font-size);
    color: var(--blue-text);
    margin-bottom: 15px;
}
.birthday-info .date-option{
    margin-top: 15px;
}

.birthday-info .date-option select{
    height: fit-content;
    padding: 10px;
    outline: none;
    color: var(--text-color);
    border: 1px solid var(--color-border);
}
.birthday-info .info{
    width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
}

.birthday-info p{
    color: var(--text-color);
    font-size: var(--gray-font-size);
}

form a{
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 25px;
}


/* Confirmation page */

.confirmation-page{
    border: 1px solid var(--color-border);
    border-radius: 3px;
    width: 350px;
    height: fit-content;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    text-align: center;
}

.confirmation-page img{
    margin-top: 15px;
    width: 92px;
    height: 72px;
}

.confirmation-page p:nth-child(2){
    font-size: var(--black-font-size);
    font-weight: bold;
}

.confirmation-page p:nth-child(3){
    font-size: var(--black-font-size);
    margin-bottom: 25px;
}

.confirmation-page p span{
    color: var(--blue-text);
}

.confirmation-page .go-back{
    font-size: var(--black-font-size);
    color: var(--blue-text);
    text-decoration: none;
}



/* Signup link */
.register-form .sign-up-link {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    border: 1px solid var(--color-border);
    border-radius: 3px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 352px;
}

.sign-up-link p {
    font-size: 14px;
}

.sign-up-link p a {
    text-decoration: none;
    color: #0095f6;
    font-weight: 700;
}

.get-link {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.get-link p {
    font-size: 13px;
}

.get-link .logo img {
    height: 40px;
}

.get-link .logo img:last-child {
    margin-left: 5px;
}


/* Page two */


</style>