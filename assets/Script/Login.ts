// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('Login')
export default class NewClass extends Component {
    @property(Label)
    label: Label | null = null;
    @property
    text: string = 'hello';
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    start () {
        // let loginHandler = new cc.Component.EventHandler();
        // loginHandler.target = this.node;
        // loginHandler.component = "LoginSignUp";
        // loginHandler.handler = "userLog";
        // console.log(cc.find("Canvas/LoginBox/LoginButton").getComponent(cc.Button).clickEvents);
        // cc.find("Canvas/LoginBox/LoginButton").getComponent(cc.Button).clickEvents.push(loginHandler);
        // console.log(cc.find("Canvas/LoginBox/LoginButton").getComponent(cc.Button).clickEvents);

//        // let signup = new cc.Component.EventHandler();
//        // signup.target = this.node;
//        // signup.component = "Login";
//        // signup.handler = "userSignUp";
//        // cc.find("Canvas/SignUpBox/SignUpButton").getComponent(cc.Button).clickEvents.push(signup);
    }
    
    userLog(){
        // console.log("loggin in");
    }
    userSignUp(){
        // console.log("signing up");
    }
//    // update (dt) {}
}


/**
 * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
 */
// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class NewClass extends cc.Component {
// 
//     @property(cc.Label)
//     label: cc.Label = null;
// 
//     @property
//     text: string = 'hello';
// 
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
//         let loginHandler = new cc.Component.EventHandler();
//         loginHandler.target = this.node;
//         loginHandler.component = "LoginSignUp";
//         loginHandler.handler = "userLog";
//         console.log(cc.find("Canvas/LoginBox/LoginButton").getComponent(cc.Button).clickEvents);
//         cc.find("Canvas/LoginBox/LoginButton").getComponent(cc.Button).clickEvents.push(loginHandler);
//         console.log(cc.find("Canvas/LoginBox/LoginButton").getComponent(cc.Button).clickEvents);
// 
//         // let signup = new cc.Component.EventHandler();
//         // signup.target = this.node;
//         // signup.component = "Login";
//         // signup.handler = "userSignUp";
//         // cc.find("Canvas/SignUpBox/SignUpButton").getComponent(cc.Button).clickEvents.push(signup);
//     }
//     
//     userLog(){
//         console.log("loggin in");
//     }
// 
//     userSignUp(){
//         console.log("signing up");
//     }
// 
//     // update (dt) {}
// }
