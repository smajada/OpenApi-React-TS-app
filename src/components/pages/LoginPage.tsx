import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../core';
import { useContext, FormEvent } from 'react';
import { Button, Checkbox, Form, type FormProps, Input } from 'antd';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { setUserInfo } = useContext(AuthContext);

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        if (values.username === 'admin' && values.password === 'test') {
            setUserInfo(values.username); // That's the important part
            navigate('/');
        }
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
        >
            <Form.Item<FieldType>
                label='Username'
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
                name='remember'
                valuePropName='checked'
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginPage;
