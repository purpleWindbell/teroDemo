import { Component } from 'react'
import { View, Text, Input,  Picker ,Button} from '@tarojs/components'
// import { Button } from "@taroify/core"
import './index.scss'

interface LoginState {
  phone: string
  password: string
  showPassword: boolean
  selectedBrand: number
  brandList: string[]
}

export default class Login extends Component<{}, LoginState> {
  
  constructor(props: any) {
    super(props)
    this.state = {
      phone: '',
      password: '',
      showPassword: false,
      selectedBrand: 0,
      brandList: ['品道', '其他品牌1', '其他品牌2'],
    }
  }

  handlePhoneChange = (e: any) => {
    this.setState({
      phone: e.detail.value
    })
  }

  handlePasswordChange = (e: any) => {
    this.setState({
      password: e.detail.value
    })
  }

  togglePasswordVisibility = () => {
    console.log('333')
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  handleBrandChange = (e: any) => {
    console.log('Picker onChange 触发')
    console.log('选择品牌：', e.detail.value)
    console.log('品牌列表：', this.state.brandList)
    this.setState({
      selectedBrand: e.detail.value
    })
  }

 

  handleLogin = () => {
    const { phone, password, selectedBrand, brandList } = this.state
    console.log('登录信息：', { 
      phone, 
      password, 
      brand: brandList[selectedBrand] 
    })
    // 登录成功提示
    console.log('登录成功！')
  }

  handleSmsLogin = () => {
    console.log('跳转到手机验证码登录')
  }

  testClick = (e: any) => {
    console.log('点击了')
    // 阻止事件冒泡
    e.stopPropagation && e.stopPropagation()
  }

  render() {
    const { phone, password, showPassword, selectedBrand, brandList } = this.state

    return (
      <View className='login-container'>
        <View className='header'>
          <Text className='title'>品道工作站</Text>
          <View className='language-btn'>
            <View className='language-icon'></View>
          </View>
        </View>
  
        <View className='login-form'>
          <Text className='form-title'>账号密码登录</Text>
          <View className='input-group'>
            <View className='input-item'>
              <View className='input-icon phone-icon'></View>
              <Input
                className='input'
                type='number'
                placeholder='请输入手机号'
                value={phone}
                onInput={this.handlePhoneChange}
                placeholderClass='input-placeholder'
              />
            </View>

            <View className='input-item'>
              <View className='input-icon lock-icon'></View>
              <Input
                className='input'
                password={!showPassword}
                placeholder='请输入密码'
                value={password}
                onInput={this.handlePasswordChange}
                placeholderClass='input-placeholder'
              />
              <View 
                className={`eye-icon ${showPassword ? 'eye-open' : 'eye-close'}`}
                onClick={this.togglePasswordVisibility}
              />
            </View>
            <View className='picker-container'>
              <View className='picker-left-icon'>
                <View className='brand-icon'></View>
              </View>
              <View className='picker-content-wrapper'>
                <Picker
                  mode='selector'
                  range={brandList}
                  value={selectedBrand}
                  onChange={this.handleBrandChange}
                >
                  <Text className='picker-text'>{brandList[selectedBrand]}</Text>
                </Picker>
                <View className='picker-arrow'></View>
              </View>
            </View>
          </View>

          <View className='sms-login' onClick={this.handleSmsLogin}>
            <Text className='sms-text'>手机验证码登录</Text>
          </View>
        </View>

        <View className='bottom-section'>
        <Button color='primary'>主要按钮</Button>
        </View>
      </View>
    )
  }
}