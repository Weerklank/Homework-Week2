import React from "react";

export default function Index(){


    return (
    <div id="contact" class="container">
        <div class="card w-75">
            <div class="card-body">
                <h1>Contact</h1>
                <form action="mailto:zoe.veggie@gmail.com" method="POST" enctype="text/plain">
                <div class="form-group">
                        <label for="nameInput">Name</label>
                        <input type="name" class="form-control" id="nameInput" placeholder="Jessie Smith"/>
                </div>
                <div class="form-group">
                    <label for="emailInput">Email</label>
                    <input type="email" class="form-control" id="emailInput" placeholder="Jessie.Smith@example.com"/>
                </div>
                <div class="form-group">
                    <label for="messageInput">Message</label>
                    <textarea id="msg" class="form-control" rows="3" placeholder="Message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" value="Send">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}