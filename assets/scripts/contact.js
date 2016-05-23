document['#contactForm']addEventListener("submit", function(e){
        e.preventDefault()
        var form = e.target
        var data = new FormData(form)

        var request = new XMLHttpRequest()

        request.onreadystatechange = function(){
          // do something with the `request.responseText`
        }

        request.open(form.method, form.action)
        request.send(data)
      })
    })
