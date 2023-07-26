<template>
<section class="section-contact reveal" id="#contact">
    <header>
        <h3>Let's Talk!</h3><span>☕</span>
    </header>
    <form action="https://api.web3forms.com/submit" method="POST">
        <fieldset>
            <input type="hidden" name="access_key" value="57b4e9d3-7e14-4fb1-b780-cef249ae04a6" />
            <input type="text" id="name" name="name" placeholder="Name..." required /><br/>
            <input type="email" id="email" name="email" placeholder="Email..." required /><br/>
            <input type="text" id="subject" name="subject" placeholder="Subject..." required /><br/>
            <textarea placeholder="Please Enter Your Message..." required></textarea><br/>
            <div class="h-captcha" data-captcha="true"></div>
            <input type="submit" id="submit" value="Send" /><br/>
        </fieldset>
    </form>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    methods: {
        reveal () {
            var reveals = document.querySelectorAll(".reveal");
            
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }
    },
    mounted () {
        window.addEventListener("scroll", this.reveal);
        this.reveal();
    },
    beforeDestroy () {
        window.removeEventListener("scroll", this.reveal);
    }
});
</script>

<style scoped lang="scss">
.section-contact {
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    scroll-margin-top: 100px;

    header {
        display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
        font-size: 2.4em;
    }

    form {
        display: flex;
            justify-content: center;
            align-items: center;
        background-image: url("/images/backgrounds/binding_dark.png"); 
        border: 6px solid rgb(130, 35, 35);
            border-radius: 10px;
        filter: drop-shadow(black 0px 10px 3px);
        padding: 10px;

        fieldset {
            display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 5px;
            border: none;

            input, textarea {
                color: rgb(180, 180, 180);
                background: none;
                border: none;
                    border-bottom: 3px solid rgb(180, 180, 180);
                font-size: 16px;

                &:focus, &:active {
                    outline: none;
                    color: white;
                }
            }

            input {
                height: 32px;
            }

            textarea {
                height: 192px;
            }
            
            #submit {
                border: 3px solid rgb(130, 35, 35);
                    border-radius: 20px;
                background-color: rgb(76, 99, 116);
                cursor: pointer;

                &:hover {
                    background-color: rgb(122, 157, 184);
                    color: white;
                }
            }
        }
    }
}
</style>