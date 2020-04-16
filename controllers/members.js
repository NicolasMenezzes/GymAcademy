const fs = require("fs")
const data = require("../data.json")
const { age, date } = require("../date")


exports.show = function(req, res) {
    const { id } = req.params

    const foundMember = data.members.find(function(member) {
        return member.id == id
    })

    if (!foundMember) return res.send("Instrutor não encontrado!")

    const member = {
        ...foundMember,
        age: age(foundMember.birth),

    }

    return res.render("members/show", { member })
}

exports.post = function(req, res) {

    var { avatar_url, birth, name, gender, email, imc, height, weight } = req.body

    birth = Date.parse(birth)
    const lastMember = data.members[data.members.length - 1]
    let id = 1
    if (lastMember) {
        id = lastMember.id + 1
    }

    data.members.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        email,
        weight,
        height,
        imc,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Erro de escrita de arquivo!")
        return res.redirect("/members")
    })
}

exports.edit = function(req, res) {
    const { id } = req.params

    const foundMember = data.members.find(function(member) {
        return member.id == id
    })

    if (!foundMember) return res.send("Instrutor não encontrado!")

    const member = {
        ...foundMember,
        birth: date(foundMember.birth)
    }

    return res.render("members/edit", { member })

}

exports.put = function(req, res) {
    const { id } = req.body
    let index = 0

    const foundMember = data.members.find(function(member, foundIndex) {
        if (id == member.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundMember) return res.send("Instrutor não encontrado!")

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.members[index] = member

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Erro!")

        return res.redirect(`/members/${id}`)
    })

}

exports.delete = function(req, res) {
    const { id } = req.body

    const filteredMembers = data.members.filter(function(member) {
        return member.id != id
    })

    data.members = filteredMembers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Erro!")

        return res.redirect("/members")
    })
}

exports.index = function(req, res) {



    return res.render("members/index", { members: data.members })
}