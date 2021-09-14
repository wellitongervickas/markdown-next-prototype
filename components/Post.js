import marked from 'marked'
import heading from '../components/Heading'
import { renderToString } from 'react-dom/server'

const Post = ({ html = ''}) => {
    const regx = /^#startComponent((.|(\r)?\n)*)#endComponent/gm;

    const parsedHtml = html.replace(regx, (e) => {
        const { props } = JSON.parse(regx.exec(e)[1]);
        return renderToString(heading(props))
    })

    return <div dangerouslySetInnerHTML={{ __html: marked.parse(parsedHtml) }} />

}

export default Post;