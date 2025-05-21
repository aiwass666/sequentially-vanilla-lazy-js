<script>
// Lazy load javascripts scripts sequentially.
// Made by Aiwass666 (https://github.com/aiwass666)
const scripts = [
{
src: "https://url-to.js",
integrity: "sha512-XXXXX",
crossorigin: "anonymous",
referrerpolicy: "no-referrer"
},
{
src: "https://url-to.js",
integrity: "sha512-XXXXX",
crossorigin: "anonymous",
referrerpolicy: "no-referrer"
},
{
src: "https://url-to.js",
integrity: "sha512-XXXXX",
crossorigin: "anonymous",
referrerpolicy: "no-referrer"
}
];
function lazyLoadScripts(index = 0) {
if (index >= scripts.length) return;
const { src, integrity, crossorigin, referrerpolicy } = scripts[index];
const script = document.createElement('script');
script.src = src;
script.integrity = integrity;
script.crossOrigin = crossorigin;
script.referrerPolicy = referrerpolicy;
script.loading = 'lazy'; // Edit at your own risk
script.onload = () => lazyLoadScripts(index + 1);
document.body.appendChild(script);
}
lazyLoadScripts();
</script>
