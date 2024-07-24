// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label, Prefab, AudioClip, v2, RigidBody, RigidBody2D, AudioSource, Sprite, director, Vec3, Animation, Vec2, BoxCollider2D } from 'cc';
import { SPRITE } from '../../extensions/plugin-import-2x/creator/components/Sprite';
const {ccclass, property} = _decorator;

@ccclass('Player')
export default class Player extends Component {
    @property(Label)
    liveslabel: Label | null = null;
    @property
    text: string = 'hello';
    @property
    lives: number = 3;
    @property(Label)
    scorelabel: Label | null = null;
    @property
    score: number = 0;
    @property(Prefab)
    coin: Prefab | null = null;
    @property(AudioClip)
    jumpAudio: AudioClip | null = null;
    @property(AudioClip)
    walkAudio: AudioClip | null = null;
    @property(AudioClip)
    loseLifeAudio: AudioClip | null = null;
    @property(AudioSource)
    audioSource: AudioSource | null = null;

    @property({
        type: RigidBody2D
    })
    playerRb: RigidBody2D|null = null;

    @property({
        type: Animation
    })
    anim: Animation| null  = null;

    private moveDir = 0;
    private fallDown: boolean = false;
    private playerSpeed = 10;
    private playerJumpSpeed = 15;
    private playerHitJumpSpeed = 15; //jump speed after hitting enemy
    //private anim = null;
    private dead = false;
    private lastWalkEffectTime=0;
//#region  start    
//    // LIFE-CYCLE CALLBACKS:
    onLoad () {
//        // console.log("check");

    }
      
    start () {
        //this.idleFrame = this.getComponent(Sprite).spriteFrame;
        //this.anim  = this.getComponent(Animation);
        this.liveslabel.string = this.lives.toString();
        // let user = firebase.auth().currentUser
        // if(user){
        // console.log(user.email);
        // console.log(user.uid);
        // let handle = this;
        // firebase.database().ref('users/'+user.uid.toString()+'/'+this.text).once('value')
        // .then(function(snapshot){
        // if(snapshot.val()){
        // console.log(snapshot.val().lives);
        // console.log(snapshot.val().score);
        // handle.score = snapshot.val().score;
        // handle.lives = snapshot.val().lives;
        //            // update labels
        // handle.scorelabel.string = handle.score.toString();
        // handle.liveslabel.string = handle.lives.toString();
        // }
        //        // else console.log("no data");
        // });
        // } else {
        // console.log("not logged in");
        // }
        console.log(this.lives);
        console.log(this.score);

       // let newCoin = cc.instantiate(this.coin);
       // let current_pos = this.node.getPosition();
       // this.node.addChild(newCoin);
       // newCoin.setPosition(current_pos);
       this.moveDir = null;
    }
    
    playerMove(moveDir: number)
    {
        
        this.moveDir = moveDir;
//        // this.node.getComponent(cc.RigidBody).linearVelocity
    }
    playerJump(type: string){
       // console.log("Jump");
        //audioEngine.playEffect(this.jumpAudio, false);
        this.audioSource.clip = this.jumpAudio;
        this.audioSource.play();
        if(type == "Normal"){
           // console.log(this.fallDown);
        if(!this.fallDown){ // Initial contact with ground will have y_speed<0
        this.playerRb!.linearVelocity = new Vec2(0, this.playerJumpSpeed);
        }
        } else if(type == "Enemy"){
        this.playerRb!.linearVelocity = new Vec2(0, this.playerHitJumpSpeed);
        }
    }
    update (dt) {
       // this.node.x += this.playerSpeed * this.moveDir * dt;

        //this.playerRb!.linearVelocity  = new Vec2(this.playerSpeed * this.moveDir, this.playerRb!.linearVelocity.y);

        if(!this.dead){
        //let velocity = this.node.getComponent(RigidBody2D).linearVelocity
        //this.node.getComponent(RigidBody2D)!.linearVelocity = v2(this.playerSpeed*this.moveDir, velocity.y);
        this.playerRb!.linearVelocity = new Vec2(this.playerSpeed*this.moveDir, this.playerRb!.linearVelocity.y);
        //this.node.scaleX = (this.moveDir >= 0) ? 2 : -2;

        //this.node.setScale(new Vec3((this.moveDir >= 0) ? 2 : -2, 0));
        const newScale = new Vec3((this.moveDir >= 0) ? 2 : -2, this.node.scale.y, this.node.scale.z);
        this.node.setScale(newScale);

        let y_speed = this.playerRb!.linearVelocity.y;
        if(y_speed < 1 && y_speed >=-1) this.fallDown = false;
        else this.fallDown = true;

        if(this.moveDir!=0){
               // console.log(this.lastWalkEffectTime);
        if(Date.now()-this.lastWalkEffectTime > 500){
                   // console.log("check");
        this.lastWalkEffectTime = Date.now();
        //audioEngine.playEffect(this.walkAudio, false);
        this.audioSource.clip = this.walkAudio;
        this.audioSource.play();
        this.lastWalkEffectTime = Date.now();
        }

        }
        this.playerAnimation();

        }

    }
    playerAnimation(){
        // if(!this.dead){
        //     if(this.fallDown){
        //         if(this.anim) this.anim.play("Player_Jump");
        //     } else {
        //         if(this.moveDir == 0){
        //             this.getComponent(Sprite).spriteFrame = this.idleFrame;
        //             this.anim.stop();
        //         }
        //         else if(this.anim){
        //             this.anim.play("Player_Move"); 
        //             console.error('play anim move');
        //         } 
        //     }
        // }

        if(!this.dead){
            if(this.fallDown){
                if(this.anim){
                    if(this.anim.name)
                    this.anim.play('Player_Jump');
                    //console.log('jump');
                }
            }else{
                //console.info(`move status: ${this.moveDir}`);
                if(this.moveDir === 0){
                    if(this.anim && this.anim.getState('Player_Idle').isPlaying === false){
                        this.anim.play('Player_Idle');
                    }
                }
                else if(this.anim && this.anim.getState('Player_Move')?.isPlaying === false){
                    this.anim.play(this.anim.clips[0].name);
                    //console.error('move');
                }
            }
        }
    }
    addScore(number:number){
        this.score += number;
        this.scorelabel.string = this.score.toString();
    }
    hurt(){
       // console.log(this.dead);

           // console.log("player hurt");
        this.lives--;
        this.liveslabel.string = this.lives.toString();
        //audioEngine.playEffect(this.loseLifeAudio, false);
        this.audioSource.clip = this.loseLifeAudio;
        this.audioSource.play();
        if(this.lives<=0){
        director.loadScene("Gameover");
        } else {
        this.node.getComponent(BoxCollider2D).enabled = false;
               // console.log("player collider enabled: " + this.node.getComponent(cc.PhysicsCollider).enabled)
        this.dead = true;
        let handle = this;
        let position = this.node.getPosition();
               // console.log("scheduling reborn");
        this.playerJump("Normal");
        this.scheduleOnce(function(){
        handle.dead = false;
                   // console.log("setting player position");
        handle.node.getComponent(BoxCollider2D).enabled = true;
        //handle.node.setPosition(v2(position.x + 50, position.y+100));
        handle.node.setPosition(new Vec3(position.x + 50, position.y+100));
        console.log("reborn");
        }, 3)
        }

    }
    onBeginContact(contact, self, other){
    //    // console.log("contact!");
    //    // console.log("player hit "+other.node.name);
    //    if(other.node.name == "FinishLine"){
    //        // console.log("finish");
    //        director.loadScene("Menu");
    //    }
    }


}
//#endregion

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
// export default class Player extends cc.Component {
// 
//     @property(cc.Label)
//     liveslabel: cc.Label = null;
// 
//     @property
//     text: string = 'hello';
// 
//     @property
//     lives: number = 3;
// 
//     @property(cc.Label)
//     scorelabel: cc.Label = null;
// 
//     @property
//     score: number = 0;
// 
//     @property(cc.Prefab)
//     coin: cc.Prefab = null;
// 
//     @property(cc.AudioClip)
//     jumpAudio: cc.AudioClip = null;
// 
//     @property(cc.AudioClip)
//     walkAudio: cc.AudioClip = null;
// 
//     @property(cc.AudioClip)
//     loseLifeAudio: cc.AudioClip = null;
// 
//     private moveDir = 0;
//     private fallDown: boolean = false;
//     private playerSpeed = 300;
//     private playerJumpSpeed = 500;
//     private playerHitJumpSpeed = 300; //jump speed after hitting enemy
//     private idleFrame = null;
//     private anim = null;
//     private dead = false;
//     private lastWalkEffectTime=0;
//     
//     // LIFE-CYCLE CALLBACKS:
//     onLoad () {
//         // console.log("check");
//         
//     }
//       
//     start () {
//         this.idleFrame = this.getComponent(cc.Sprite).spriteFrame;
//         this.anim  = this.getComponent(cc.Animation);
//         this.liveslabel.string = this.lives.toString();
//         let user = firebase.auth().currentUser
//         if(user){
//             console.log(user.email);
//             console.log(user.uid);
//             let handle = this;
//             firebase.database().ref('users/'+user.uid.toString()+'/'+this.text).once('value')
//             .then(function(snapshot){
//                 if(snapshot.val()){
//                     console.log(snapshot.val().lives);
//                     console.log(snapshot.val().score);
//                     handle.score = snapshot.val().score;
//                     handle.lives = snapshot.val().lives;
//                     // update labels
//                     handle.scorelabel.string = handle.score.toString();
//                     handle.liveslabel.string = handle.lives.toString();
//                 }
//                 // else console.log("no data");
//             });
//         } else {
//             console.log("not logged in");
//         }
//         console.log(this.lives);
//         console.log(this.score);
// 
//         // let newCoin = cc.instantiate(this.coin);
//         // let current_pos = this.node.getPosition();
//         // this.node.addChild(newCoin);
//         // newCoin.setPosition(current_pos);
//     }
//     
//     playerMove(moveDir: number)
//     {
//         
//         this.moveDir = moveDir;
//         // this.node.getComponent(cc.RigidBody).linearVelocity
//     }
//     playerJump(type: string){
//         // console.log("Jump");
//         cc.audioEngine.playEffect(this.jumpAudio, false);
//         if(type == "Normal"){
//             // console.log(this.fallDown);
//             if(!this.fallDown){ // Initial contact with ground will have y_speed<0
//                 this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, this.playerJumpSpeed);
//             }
//         } else if(type == "Enemy"){
//             this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, this.playerHitJumpSpeed);
//         }
//     }
//     update (dt) {
//         // this.node.x += this.playerSpeed * this.moveDir * dt;
// 
//         if(!this.dead){
//             let velocity = this.node.getComponent(cc.RigidBody).linearVelocity 
//             this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.playerSpeed*this.moveDir, velocity.y);
//             this.node.scaleX = (this.moveDir >= 0) ? 2 : -2;
// 
//             let y_speed = this.node.getComponent(cc.RigidBody).linearVelocity.y;
//             if(y_speed < 1 && y_speed >=-1) this.fallDown = false;
//             else this.fallDown = true;
// 
//             if(this.moveDir!=0){
//                 // console.log(this.lastWalkEffectTime);
//                 if(Date.now()-this.lastWalkEffectTime > 500){
//                     // console.log("check");
//                     this.lastWalkEffectTime = Date.now();
//                     cc.audioEngine.playEffect(this.walkAudio, false);
//                     this.lastWalkEffectTime = Date.now();
//                 }
//                 
//             }
//             this.playerAnimation();
//         }
// 
//     }
//     playerAnimation(){
//         if(!this.dead){
//             if(this.fallDown){
//                 if(!this.anim.getAnimationState("Player_Jump").isPlaying)
//                     this.anim.play("Player_Jump");
//             } else {
//                 if(this.moveDir == 0)
//                 {
//                     this.getComponent(cc.Sprite).spriteFrame = this.idleFrame;
//                     this.anim.stop();
//                 }    
//                 else if(!this.anim.getAnimationState("Player_Move").isPlaying)
//                     this.anim.play("Player_Move");
//             }
//         }
//         
//     }
//     addScore(number:number){
//         this.score += number;
//         this.scorelabel.string = this.score.toString();
//     }
//     hurt(){
//         // console.log(this.dead);
//         
//             // console.log("player hurt");
//             this.lives--;
//             this.liveslabel.string = this.lives.toString();
//             cc.audioEngine.playEffect(this.loseLifeAudio, false);
//             if(this.lives<=0){
//                 cc.director.loadScene("Gameover");
//             } else {
//                 this.node.getComponent(cc.PhysicsCollider).enabled = false;
//                 // console.log("player collider enabled: " + this.node.getComponent(cc.PhysicsCollider).enabled)
//                 this.dead = true;
//                 let handle = this;
//                 let position = this.node.getPosition();
//                 // console.log("scheduling reborn");
//                 this.playerJump("Normal");
//                 this.scheduleOnce(function(){
//                     handle.dead = false;
//                     // console.log("setting player position");
//                     handle.node.getComponent(cc.PhysicsCollider).enabled = true;
//                     handle.node.setPosition(cc.v2(position.x + 50, position.y+100));
//                     console.log("reborn");
//                 }, 3)
//             }
//         
//     }
//     onBeginContact(contact, self, other){
//         // console.log("contact!");
//         // console.log("player hit "+other.node.name);
//         // if(other.node.name == "FinishLine"){
//         //     // console.log("finish");
//         //     cc.director.loadScene("Menu");
//         // }
//     }
// }
