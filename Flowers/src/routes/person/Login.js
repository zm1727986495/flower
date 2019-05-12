//登陆
import React from 'react';
import {connect} from 'react-redux'
import {Switch,Redirect,Route,withRouter} from 'react-router-dom';
import {Icon,Form ,Input, Button, Checkbox,Modal} from 'antd';
import md5 from 'blueimp-md5';
import {login} from '../../api/person';
import action from '../../store/action/index'

const FormItem = Form.Item;

function loginFail() {
    const modal = Modal.error({
        title: '登录失败',
        content: '请稍后重新尝试!',
    });
    setTimeout(() => modal.destroy(), 2000);
}

class Login extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    handleSubmit = ev => {
        ev.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let {userName,userPass}=values;
                userPass=md5(userPass);
                let result=await login({
                    name:userName,
                    password:userPass
                });
                if(parseFloat(result.code)===0){
                    this.props.queryBaseInfo();
                    this.props.history.go(-1);
                    return
                }
                loginFail();
            }
        });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return <div className={'personLogin'}>
            <div className='loginTop'>
                <div className='loginIcon clearfix'>
                    <a href="javascript:;" onClick={ev=>{
                        this.props.history.go(-1);
                    }}><Icon type='left' className='arrowL'/></a>
                    <p>会员登录</p>
                    <a href="javascript:;"><Icon type='bars' className='arrowR'/></a>
                </div>
            </div>
            <div className='entry'>
                <p>使用手机验证登录</p>
            </div>
            <div className={'loginMiddle'}>
                <Form onSubmit={this.handleSubmit} className="back">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入邮箱/手机号码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('userPass', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入登录密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: false,
                        })(
                            <Checkbox className={'checkB'}>一个月内免登录</Checkbox>
                        )}
                        <Button type="primary" htmlType="submit" className="btn">
                            登录
                        </Button>
                    </FormItem>
                </Form>
            </div>
            <div className='loginIcon'>
                <p className='iconL' onClick={ev=>{
                    this.props.history.push('/person/register');
                }}><Icon type='book'/>快速注册</p>
                <p className='iconR'><Icon type='lock'/>找回密码</p>
            </div>
            <div className={'other'}>
                <div className={'commodity'}>
                    <h3>
                        其他方式登录
                    </h3>
                </div>
                <div className={'ico'}>
                    <a href="javascript:;" className={'icoL'}>
                        <p><Icon type={'qq'}/></p>
                        <span>QQ</span>
                    </a>
                    <a href="javascript:;" className={'icoR'}>
                        <p><Icon type={'alipay-circle'}/></p>
                        <span>支付宝</span>
                    </a>
                </div>
            </div>
        </div>
    }
    onChange=e=>{
        console.log(`checked = ${e.target.checked}`);
    }
}
export default Form.create()(connect(null,action.person)(Login));