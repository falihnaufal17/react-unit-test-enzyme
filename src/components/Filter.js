import React from "react";

const Filter = p => {
    return (
        <form>
            <div>
                <label>Role: </label>
                <select
                    onChange={e => {
                        p.setHitParams({
                            ...p.hitParams,
                            role: e.target.value
                        })
                    }}
                    data-testid="roleSelect"
                >
                    <option value="">Pilih Role</option>
                    <option value="customer">Customer</option>
                    <option value="agent">Agent</option>
                </select>
            </div>
            <div>
                <label>Parent: </label>
                <select
                    onChange={e => p.setHitParams({
                        ...p.hitParams,
                        parent: e.target.value
                    })}
                    disabled={p.hitParams.role == '' ? true : false}
                    data-testid="parentSelect"
                >
                    <option value="">Pilih Role</option>
                    <option value="1">Kenalan Moladin</option>
                    <option value="2">Beli Mobil</option>
                </select>
            </div>
        </form>
    )
}

export default Filter