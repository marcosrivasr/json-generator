let editor;

document.querySelector('#formcreate').addEventListener('submit', e  => {
    e.preventDefault();
    const code = editor.getValue();
    document.querySelector('#data').value=code;
    e.target.submit();
}); 

require.config({ paths: { vs: 'monaco-editor/min/vs' } });

require(['vs/editor/editor.main'], function () {
    const data = document.querySelector("#data").value;
    let code = '{\n\n}';
    if(data){
        code = data;
    }
    editor = monaco.editor.create(document.getElementById('editor'), {
        value: [code].join('\n'),
        language: 'JSON'
    });
});

function save(){
    console.log(editor.getValue());
}