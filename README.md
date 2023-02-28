# HF Space block

This block allows you to embed a Huggingface space in a README file on GitHub. 

Simply create a yml file containing following content and embed as follows in your README.md

```yml
user: gradio
spacename: pictionary
```

```markdown
<BlockComponent block={{"type":"file","id":"hfspaces","title":"HF Space","description":"Demo"}} context={{"repo":"gradio-block","owner":"duerrsimon","path":"example/hf.yml","sha":"main","file":"README.md"}} />
```


## Demo
<BlockComponent block={{"type":"file","id":"hfspaces","title":"HF Space","description":"Demo"}} context={{"repo":"gradio-block","owner":"duerrsimon","path":"example/hf.yml","sha":"main","file":"README.md"}} />

