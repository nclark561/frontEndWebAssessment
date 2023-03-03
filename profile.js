function hireMeForm(evt) {
    evt.preventDefault();
    alert('I might reach out to you as soon as my very busy schedule allows. I look forward to maybe working with you!');
}

document.querySelector('#hire').addEventListener('submit', hireMeForm);

document.querySelector('#color').addEventListener('click', () => alert('Purple'));
document.querySelector('#place').addEventListener('click', () => alert('Probs Italy or Greece but i\'ve never actually been to either :/'));
document.querySelector('#ritual').addEventListener('click', () => alert('I don\'t have a favorite ritual?'));