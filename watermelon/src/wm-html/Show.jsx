import React, { Component } from 'react'
import { Search,Main,ShowMovie,Ulcss, Avatar,SmallMovie,Descript,Content,Textcss } from '../wm-css/styledShow'
import search from '../menu_set/search.svg'
import download from '../menu_set/direction-down.svg'
import upload from '../menu_set/upload.svg'
import notification from '../menu_set/notification.svg'
import layers from '../menu_set/layers.svg'
import header from '../img/header.jpg'
import youyu from '../img/youyuGame.jpeg'
import american   from '../img/American.jpeg'
import boy  from '../img/boy.jpeg' 
import game  from '../img/game.jpeg' 
import hello  from '../img/hello.jpeg' 
import Indebt  from '../img/Indebt.jpeg' 
import old_woman  from '../img/old_woman.jpeg' 
import wujing  from '../img/wujing.jpeg' 
import xiangsheng from '../img/xiangsheng.jpeg'
export default class Show extends Component {
    render() {
        return (
            <Main>
                <div>
                <Search>
                <input className="inputCon" type="text" placeholder="中国好声音2021"/>
                <span className="font_shu">|</span>
                <span className="font"><img className="img" src={search} alt="搜索图标" />搜索</span>
                </Search>             
                   <Ulcss> 
                    <li className="li"><img className="img" src={download} alt="下载"/>下载</li>
                    <li className="li"><img className="img" src={layers} alt="下载"/>创作平台</li>
                    <li className="li"><img className="img" src={notification} alt="下载"/>消息</li>
                    <li className="li"><img className="img" src={upload} alt="下载"/>发视频</li>
                   </Ulcss>                                     
                </div> 
                <Avatar>
                    <img className="header" src={header} alt="头像" />
                </Avatar>
                <ShowMovie>
                     <SmallMovie>
                         <img className="movieImg" src={youyu} alt="鱿鱼游戏" />
                         <Descript>
                              <Avatar>
                                 <img className="header" src={header} alt="头像" />
                              </Avatar>
                              <Content>
                                  这种游戏一般人玩不得，看完瞬间明白了。《鱿鱼游戏》
                              </Content>                             
                                    <Textcss>
                                         老表说电影 
                                    </Textcss>
                                    <span className="fontSapn">56.7万次播放·</span><span>3周前</span>                                
                         </Descript>
                     </SmallMovie>
                     <SmallMovie>
                         <img className="movieImg" src={american } alt="鱿鱼游戏" />
                         <Descript>
                              <Avatar>
                                 <img className="header" src={header} alt="头像" />
                              </Avatar>
                              <Content>
                                  这种游戏一般人玩不得，看完瞬间明白了。《鱿鱼游戏》
                              </Content>                             
                                    <Textcss>
                                         老表说电影 
                                    </Textcss>
                                    <span className="fontSapn">56.7万次播放·</span><span>3周前</span>                                
                         </Descript>
                     </SmallMovie>
                     <SmallMovie>
                         <img className="movieImg" src={boy} alt="鱿鱼游戏" />
                         <Descript>
                              <Avatar>
                                 <img className="header" src={header} alt="头像" />
                              </Avatar>
                              <Content>
                                  这种游戏一般人玩不得，看完瞬间明白了。《鱿鱼游戏》
                              </Content>                             
                                    <Textcss>
                                         老表说电影 
                                    </Textcss>
                                    <span className="fontSapn">56.7万次播放·</span><span>3周前</span>                                
                         </Descript>
                     </SmallMovie>
                     <SmallMovie>
                         <img className="movieImg" src={game} alt="鱿鱼游戏" />
                         <Descript>
                              <Avatar>
                                 <img className="header" src={header} alt="头像" />
                              </Avatar>
                              <Content>
                                  这种游戏一般人玩不得，看完瞬间明白了。《鱿鱼游戏》
                              </Content>                             
                                    <Textcss>
                                         老表说电影 
                                    </Textcss>
                                    <span className="fontSapn">56.7万次播放·</span><span>3周前</span>                                
                         </Descript>
                     </SmallMovie>
                     <SmallMovie>
                         <img className="movieImg" src={hello} alt="鱿鱼游戏" />
                         <Descript>
                              <Avatar>
                                 <img className="header" src={header} alt="头像" />
                              </Avatar>
                              <Content>
                                  这种游戏一般人玩不得，看完瞬间明白了。《鱿鱼游戏》
                              </Content>                             
                                    <Textcss>
                                         老表说电影 
                                    </Textcss>
                                    <span className="fontSapn">56.7万次播放·</span><span>3周前</span>                                
                         </Descript>
                     </SmallMovie>
                     <SmallMovie>
                         <img className="movieImg" src={Indebt} alt="鱿鱼游戏" />
                         <Descript>
                              <Avatar>
                                 <img className="header" src={header} alt="头像" />
                              </Avatar>
                              <Content>
                                  这种游戏一般人玩不得，看完瞬间明白了。《鱿鱼游戏》
                              </Content>                             
                                    <Textcss>
                                         老表说电影 
                                    </Textcss>
                                    <span className="fontSapn">56.7万次播放·</span><span>3周前</span>                                
                         </Descript>
                     </SmallMovie>
                     <SmallMovie>
                         <img className="movieImg" src={old_woman} alt="鱿鱼游戏" />
                         <Descript>
                              <Avatar>
                                 <img className="header" src={header} alt="头像" />
                              </Avatar>
                              <Content>
                                  这种游戏一般人玩不得，看完瞬间明白了。《鱿鱼游戏》
                              </Content>                             
                                    <Textcss>
                                         老表说电影 
                                    </Textcss>
                                    <span className="fontSapn">56.7万次播放·</span><span>3周前</span>                                
                         </Descript>
                     </SmallMovie>
                     <SmallMovie>
                         <img className="movieImg" src={wujing} alt="鱿鱼游戏" />
                         <Descript>
                              <Avatar>
                                 <img className="header" src={header} alt="头像" />
                              </Avatar>
                              <Content>
                                  这种游戏一般人玩不得，看完瞬间明白了。《鱿鱼游戏》
                              </Content>                             
                                    <Textcss>
                                         老表说电影 
                                    </Textcss>
                                    <span className="fontSapn">56.7万次播放·</span><span>3周前</span>                                
                         </Descript>
                     </SmallMovie>
                </ShowMovie>
            </Main>
        )
    }
}
