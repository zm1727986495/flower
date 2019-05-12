//注册
import React from 'react';
import {connect} from 'react-redux';
import {Icon,Input,Checkbox,Button,Form, Modal,Row,Col} from 'antd';
import md5 from 'blueimp-md5';
import {register} from '../../api/person'
import action from '../../store/action/index'

const FormItem = Form.Item;

function loginFail() {
    const modal = Modal.error({
        title: '注册失败',
        content: '请稍后重新尝试!',
    });
    setTimeout(() => modal.destroy(), 2000);
}

class Register extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    handleSubmit=ev=>{
        ev.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                values.password=md5(values.password);
                let result=await register(values);
                if(parseFloat(result.code)===0){
                    this.props.queryBaseInfo();
                    this.props.history.push('/person');
                    return
                }
                loginFail();
            }
        });
    };

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return <section className={'personRegister'}>
            <div className='regTop'>
                <div className='regIcon clearfix'>
                    <a href="javascript:;" onClick={ev=>{
                        this.props.history.go(-1);
                    }}><Icon type='left' className='arrowL'/></a>
                    <p>注册新用户</p>
                    <a href="javascript:;"><Icon type='bars' className='arrowR'/></a>
                </div>
            </div>
            <div className={'reg'}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout}>
                        {getFieldDecorator('name', {
                            rules: [
                                {pattern:/[\u4e00-\u9fa5]/g,max:10,required: true, message: '请输入用户名!'}
                            ]
                        })(<Input
                            className={'back'}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入用户名"/>)}
                    </FormItem>

                    <FormItem {...formItemLayout}>
                        {getFieldDecorator('email', {
                            rules: [
                                {required: true, message: '请输入邮箱!'},
                                {type: 'email', message: '输入的邮箱格式不正确!'}
                            ]
                        })(<Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            className={'back'}
                            placeholder="请输入邮箱地址"
                        />)}
                    </FormItem>

                    <FormItem {...formItemLayout} >
                        {getFieldDecorator('phone', {
                            rules: [
                                {type:'',pattern:/^1\d{10}$/,required: true, message: '请输入手机号!'}
                            ]
                        })(<Input className={'back'}
                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}

                            placeholder="请输入手机号"
                        />)}
                    </FormItem>

                    <FormItem {...formItemLayout} >
                        {getFieldDecorator('password', {
                            rules: [
                                {pattern:/^\w{6,}$/g,required: true, message: '请输入密码!'}
                            ]
                        })(<Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type='password'
                            className={'back'}
                            placeholder="请输入密码"
                        />)}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: false,
                        })(
                            <Checkbox className={'checkB'}>阅读并同意用户注册协议</Checkbox>
                        )}
                        <Button type="primary" htmlType="submit" className="pho">
                            立即注册
                        </Button>
                    </FormItem>

                </Form>
            </div>
            <div className={'pass'}>
                <a href='javascript:;'>找回密码</a>
            </div>
        </section>
    }
}
export default Form.create()(connect(null,action.person)(Register));