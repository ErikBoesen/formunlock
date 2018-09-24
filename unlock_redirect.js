console.log('Switching to user 1!');
document.body.innerHTML = 'Redirecting...';
var loc = window.location.href,
    split_loc = loc.split('/');
split_loc.splice(3, 0, 'u/1');
split_loc.pop();
split_loc.push('viewform');
window.location.href = split_loc.join('/');
