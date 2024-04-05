export default function SignInButton() {

    function goToSignIn(){
        return window.location.href = "https://close-eft-99.accounts.dev/sign-in";
    }

    return (
        <button onClick={goToSignIn} className="sign-in">Sign In</button>
    );
}