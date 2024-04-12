import { View, Text, Pressable } from 'react-native'
import './BotaoCustom.css'

const BotaoCustom = (props) => {

    return <View>
        <Pressable id='botao' onPress={props.onPress}>
            <Text>
                {props.children}
            </Text>
        </Pressable>
    </View>
}

export default BotaoCustom