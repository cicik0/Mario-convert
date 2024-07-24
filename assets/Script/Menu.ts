// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label, Node, AudioClip, find, Button, director } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('Menu')
export default class Menu extends Component {
    @property(Label)
    label: Label | null = null;
    @property
    text: string = 'hello';
    @property(Node)
    button: Node | null = null;
    @property(Node)
    loginButton: Node | null = null;
    @property(AudioClip)
    bgm: AudioClip | null = null;
   // LIFE-CYCLE CALLBACKS:
   // onLoad () {}
    start () {
       // console.log("hello");
        let startbtn = new Component.EventHandler();
        startbtn.target = this.node;
        startbtn.component = "Menu";
        startbtn.handler = "loadGameScene";
        find("Canvas/StartButton").getComponent(Button).clickEvents.push(startbtn);

       // this.button.getComponent(cc.Button).clickEvents.push(startbtn);
       // this.node.getComponent(cc.Button).clickEvents.push(startbtn);
       // this.button.getComponent(cc.Button).clickEvents.push(startbtn);

        let loginbtn = new Component.EventHandler();
        loginbtn.target = this.node;
        loginbtn.component = "Menu";
        loginbtn.handler = "login";
        find("Canvas/LoginButton").getComponent(Button).clickEvents.push(loginbtn);

       // this.loginButton.getComponent(cc.Button).clickEvents.push(loginbtn);
        //audioEngine.playMusic(this.bgm, true);



       // console.log(cc.find("Canvas/StartButton").getComponent(cc.Button));


       // .clickEvents.push(startbtn);
    }
    login(){
        director.loadScene("Login");
    }
    
    loadGameScene(){
        director.loadScene("StageSelect");
       // console.log("click");
    }
   // update (dt) {}
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
// export default class Menu extends cc.Component {
// 
//     @property(cc.Label)
//     label: cc.Label = null;
// 
//     @property
//     text: string = 'hello';
// 
//     @property(cc.Node)
//     button: cc.Node = null;
// 
//     @property(cc.Node)
//     loginButton: cc.Node = null;
// 
//     @property(cc.AudioClip)
//     bgm: cc.AudioClip = null;
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
//         // console.log("hello");
//         let startbtn = new cc.Component.EventHandler();
//         startbtn.target = this.node;
//         startbtn.component = "Menu";
//         startbtn.handler = "loadGameScene";
//         cc.find("Canvas/StartButton").getComponent(cc.Button).clickEvents.push(startbtn);
//         
//         // this.button.getComponent(cc.Button).clickEvents.push(startbtn);
//         // this.node.getComponent(cc.Button).clickEvents.push(startbtn);
//         // this.button.getComponent(cc.Button).clickEvents.push(startbtn);
// 
//         let loginbtn = new cc.Component.EventHandler();
//         loginbtn.target = this.node;
//         loginbtn.component = "Menu";
//         loginbtn.handler = "login";
//         cc.find("Canvas/LoginButton").getComponent(cc.Button).clickEvents.push(loginbtn);
//         
//         // this.loginButton.getComponent(cc.Button).clickEvents.push(loginbtn);
//         cc.audioEngine.playMusic(this.bgm, true);
// 
// 
//         
//         // console.log(cc.find("Canvas/StartButton").getComponent(cc.Button));
//         
// 
//         // .clickEvents.push(startbtn);
//     }
// 
//     login(){
//         cc.director.loadScene("Login");
//     }
//     
//     loadGameScene(){
//         cc.director.loadScene("StageSelect");
//         // console.log("click");
//     }
// 
//     // update (dt) {}
// }
