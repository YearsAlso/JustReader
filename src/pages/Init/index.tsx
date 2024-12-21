import React, { useState } from 'react'
import { Form, Input, Button, Select, message } from 'antd'

const { Option } = Select

const DatabaseConfigPage: React.FC = () => {
  const [dbType, setDbType] = useState('sqlite')

  const onFinish = (values: any) => {
    // 处理表单提交
    console.log('Received values:', values)
    message.success('数据库配置已保存')
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
      <h2>数据库配置</h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ dbType: 'sqlite', dbPath: 'sqlite:just-reader.db' }}
      >
        <Form.Item label="数据库类型" name="dbType" rules={[{ required: true, message: '请选择数据库类型' }]}>
          <Select onChange={(value) => setDbType(value)}>
            <Option value="sqlite">SQLite</Option>
            <Option value="mysql">MySQL</Option>
            <Option value="postgresql">PostgreSQL</Option>
          </Select>
        </Form.Item>

        {dbType === 'sqlite' && (
          <Form.Item label="SQLite 数据库路径" name="dbPath" rules={[{ required: true, message: '请输入数据库路径' }]}>
            <Input />
          </Form.Item>
        )}

        {dbType === 'mysql' && (
          <>
            <Form.Item label="MySQL 主机" name="mysqlHost" rules={[{ required: true, message: '请输入 MySQL 主机' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="MySQL 用户名" name="mysqlUser" rules={[{ required: true, message: '请输入 MySQL 用户名' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="MySQL 密码" name="mysqlPassword" rules={[{ required: true, message: '请输入 MySQL 密码' }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item label="MySQL 数据库名" name="mysqlDatabase" rules={[{ required: true, message: '请输入 MySQL 数据库名' }]}>
              <Input />
            </Form.Item>
          </>
        )}

        {dbType === 'postgresql' && (
          <>
            <Form.Item label="PostgreSQL 主机" name="postgresHost" rules={[{ required: true, message: '请输入 PostgreSQL 主机' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="PostgreSQL 用户名" name="postgresUser" rules={[{ required: true, message: '请输入 PostgreSQL 用户名' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="PostgreSQL 密码" name="postgresPassword" rules={[{ required: true, message: '请输入 PostgreSQL 密码' }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item label="PostgreSQL 数据库名" name="postgresDatabase" rules={[{ required: true, message: '请输入 PostgreSQL 数据库名' }]}>
              <Input />
            </Form.Item>
          </>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            保存配置
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default DatabaseConfigPage