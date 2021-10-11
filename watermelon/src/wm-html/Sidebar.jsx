import React, { Component } from 'react'
import { Sidecss,SetCommon,SetBottom,SetFont,Special,Copyright,Copyfont } from '../wm-css/styledIndex'
import logo from '../img/log.svg'
import banquan from '../icon_set/banquan.svg'
import kanjia  from '../icon_set/wodekanjia.png'
import guankan from '../icon_set/bingtutubiao.svg'  
import shoucang from '../icon_set/cangchucangku.svg'
// icon没有找到合适的，请不要在意
// 就目前来看，第一个div根本不合适来定义其余内容，只适合定义基础内容
export default class Sidebar extends Component {

    render() {
        return (
            <Sidecss>
            <div>
              
                <img className="first" src={logo} alt="西瓜视频logo" />
                <SetBottom>
                    <SetCommon>
                    <img className="others" src={kanjia} alt="首页" />
                    <SetFont>
                    <span>首页</span>
                    </SetFont>
                    </SetCommon>
                    <SetCommon>
                    <img className="others" src={banquan} alt="关注" />
                    <SetFont>
                    <span>关注</span>
                    </SetFont>
                    </SetCommon>
                </SetBottom>   
                <div>
                    <SetCommon>
                    <img className="others" src={guankan} alt="观看历史" />
                    <SetFont>
                    <span>观看历史</span>
                    </SetFont>
                    </SetCommon>
                    <SetCommon>
                    <img className="others" src={shoucang} alt="我的收藏" />
                    <SetFont>
                    <span>我的收藏</span>
                    </SetFont>
                    </SetCommon>
                </div>   
                 <Special>
                     特色频道
                 </Special>
                 <div>
                        <SetCommon>
                            <img className="others" src={guankan} alt="电影" />
                            <SetFont>
                            <span>观看历史</span>
                            </SetFont>
                            </SetCommon>
                            <SetCommon>
                            <img className="others" src={shoucang} alt="电视剧" />
                            <SetFont>
                            <span>我的收藏</span>
                            </SetFont>
                        </SetCommon>
                        <SetCommon>
                            <img className="others" src={guankan} alt="游戏" />
                            <SetFont>
                            <span>游戏</span>
                            </SetFont>
                            </SetCommon>
                            <SetCommon>
                            <img className="others" src={shoucang} alt="音乐" />
                            <SetFont>
                            <span>音乐</span>
                            </SetFont>
                        </SetCommon>         
                        <SetCommon>
                            <img className="others" src={guankan} alt="影视" />
                            <SetFont>
                            <span>影视</span>
                            </SetFont>
                            </SetCommon>
                            <SetCommon>
                            <img className="others" src={shoucang} alt="纪录片" />
                            <SetFont>
                            <span>纪录片</span>
                            </SetFont>
                        </SetCommon>     
                        <SetCommon>
                            <img className="others" src={guankan} alt="直播" />
                            <SetFont>
                            <span>直播</span>
                            </SetFont>
                            </SetCommon>
                            <SetCommon>
                            <img className="others" src={shoucang} alt="农人" />
                            <SetFont>
                            <span>农人</span>
                            </SetFont>
                        </SetCommon>     
                        <SetCommon>
                            <img className="others" src={guankan} alt="美食" />
                            <SetFont>
                            <span>美食</span>
                            </SetFont>
                            </SetCommon>
                            <SetCommon>
                            <img className="others" src={shoucang} alt="综艺" />
                            <SetFont>
                            <span>综艺</span>
                            </SetFont>
                        </SetCommon>     
                        <SetCommon>
                            <img className="others" src={guankan} alt="少儿" />
                            <SetFont>
                            <span>少儿</span>
                            </SetFont>
                            </SetCommon>
                            <SetCommon>
                            <img className="others" src={shoucang} alt="动漫" />
                            <SetFont>
                            <span>动漫</span>
                            </SetFont>
                        </SetCommon>  
                        <SetBottom>   
                        <SetCommon>
                            <img className="others" src={guankan} alt="搞笑" />
                            <SetFont>
                            <span>搞笑</span>
                            </SetFont>
                            </SetCommon>
                            <SetCommon>
                            <img className="others" src={shoucang} alt="宠物" />
                            <SetFont>
                            <span>宠物</span>
                            </SetFont>
                        </SetCommon>   
                        </SetBottom>  
                 </div>
                      <Copyright>
                          <Copyfont>京ICP备12025439号-35</Copyfont>
                          <Copyfont>增值电信业务经营许可证</Copyfont>
                          <Copyfont>京ICP证140141号</Copyfont>
                          <Copyfont>(京)字第03999号</Copyfont>
                          <Copyfont>广播电视节目制作经营许可证</Copyfont>
                          <Copyfont>京网文【2020】4222-766号</Copyfont>
                          <Copyfont>中国互联网举报中心 | 营业执照</Copyfont>
                          <Copyfont>违法和不良信息举报</Copyfont>
                          <Copyfont>400-140-2108</Copyfont>
                          <Copyfont>举报邮箱：jubao@ixigua.com</Copyfont>
                          <Copyfont>京公网安备11000002002050</Copyfont>
                          <Copyfont>©2021 西瓜视频版权所有</Copyfont>
                      </Copyright>
            </div>
            </Sidecss>
        )
    }
}

