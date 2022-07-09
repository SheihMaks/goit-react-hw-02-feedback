import {SectionStyle,MainMessage} from './Section.styled'

export const Section=props=>{
    const {title,children}=(props)
    return (<SectionStyle><MainMessage>{title}</MainMessage>
    {children}</SectionStyle>)
}