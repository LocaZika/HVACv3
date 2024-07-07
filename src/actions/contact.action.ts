'use server'
export default async function contactAction(formData: FormData){
  const contactData = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    question: formData.get('question'),
  }
  console.log(contactData);
}