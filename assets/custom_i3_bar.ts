const interval = parseInt(Deno.args[0]) || 1000;

setInterval(() => {
  console.log("");
}, interval);
