import styled from 'styled-components';
import InputAtm from '../atoms/Input/InputAtm';
import { ButtonAtm } from '../atoms/Button/ButtonAtm';
import { Form } from 'antd';
import { FormProps } from 'antd/lib/form';

const LoginMlc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
`;

type FieldType = {
    username?: string;
    password?: string;
};

const Login = () => {
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        localStorage.setItem('user', JSON.stringify(values));
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <LoginMlc>
            <h1>Login</h1>
            <Form
                name='loginForm'
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ username: '', password: '' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
            >
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <InputAtm type='text' />
                </Form.Item>

                <Form.Item
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <InputAtm type='password' />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <ButtonAtm variant='blue' type='submit'>
                        Submit
                    </ButtonAtm>
                </Form.Item>
            </Form>
        </LoginMlc>
    );
};

export default Login;
